{-# LANGUAGE DeriveGeneric #-}

module ObjHash
  (
    objhash
  , hashValue
  , hashNull
  , hashBool
  , hashScientific
  , hashList
  , hashString
  ) where

import Data.List (sort)
import Data.Aeson (ToJSON, toJSON)
import qualified Data.Text as Text
import qualified Data.ByteString as B
import qualified Data.Scientific as Sci
import qualified Data.Aeson.Types as A
import qualified Crypto.Hash.SHA256 as SHA256
import Data.HashMap.Strict (HashMap, toList)
import Data.ByteString.Char8 (pack)

data Hash = Hash {
    name :: String
  , age  :: Double
  } deriving (Generic, Show)

instance ToJSON Hash where
  toEncoding = genericToEncoding defaultOptions

hash :: String -> B.ByteString -> B.ByteString
hash prefix bs = SHA256.hash $ B.append (pack prefix) bs

hashString :: String -> B.ByteString
hashString s = hash "u" $ pack s

hashNull :: B.ByteString
hashNull = B.empty

hashBool :: Bool -> B.ByteString
hashBool b = hash "b" $ pack bs
  where
    bs = if b then "1" else "0"

significandString :: Double -> String
significandString d
  | d == 0    = ""
  | d >= 1    = "1" ++ significandString ((d - 1) * 2)
  | otherwise = "0" ++ significandString (d * 2)

normalizeDouble :: Double -> String
normalizeDouble d
  | isInfinite d = if d > 0 then "Infinity" else "-Infinity"
  | isNaN d      = "NaN"
  | d == 0       = "+0:"
  | d < 0        = "-" ++ stringified (-d)
  | d > 0        = "+" ++ stringified d
  where
    stringified n =
      (show $ exponent n) ++ ":" ++ significandString (significand n)

hashScientific :: Sci.Scientific -> B.ByteString
hashScientific sci =
  case num of
    Left double -> hash "f" $ pack $ normalizeDouble double
    Right int -> hash "i" $ pack $ show int
  where
    num = Sci.floatingOrInteger sci

hashList :: A.Array -> B.ByteString
hashList _ = B.empty
-- hashList a = concat $ Vector.map hashValue a

hashObject :: HashMap Text.Text A.Value -> B.ByteString
hashObject obj = hash "d" $ B.concat $ sort $ hashElements $ obj
  where
    hashElement (k, v) = B.append (hashString $ Text.unpack k) (hashValue v)
    hashElements hm = map hashElement (toList hm)

hashValue :: A.Value -> B.ByteString
hashValue A.Null = hashNull
hashValue (A.String s) = hashString $ Text.unpack s
hashValue (A.Bool b) = hashBool b
hashValue (A.Array xs) = hashList xs
hashValue (A.Number n) = hashScientific n
hashValue (A.Object o) = hashObject o

objhash :: ToJSON a => a -> B.ByteString
objhash = hashValue . toJSON
