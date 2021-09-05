import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class ClickableMaskView extends StatelessWidget {
  const ClickableMaskView({
    Key? key,
    required this.rippleColor,
    required this.onClick,
    required this.padding,
    required this.radius,
  }) : super(key: key);

  final Color rippleColor;
  final Function onClick;
  final double padding;
  final double radius;

  @override
  Widget build(BuildContext context) {
    return Positioned.fill(
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: context.size!.height),
        child: Material(
          color: rippleColor,
          child: InkWell(
            onTap: () => onClick.call(),
            borderRadius: BorderRadius.circular(radius),
          ),
        ),
      ),
    );
  }
}
