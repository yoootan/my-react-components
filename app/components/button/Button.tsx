import { Color, colors } from "@/constants/color";
import React, { CSSProperties } from "react";

type ButtonProps = {
  /**
   * 文字色
   */
  color: Color;
  /**
   * 背景色
   */
  backgroundColor: Color;
  /**
   * ボタンのサイズ
   */
  size?: "sm" | "md" | "lg";
  /**
   * ボタンのラベル
   */
  label: string;
  /**
   * ボタンのスタイル
   */
  style?: CSSProperties;
  /**
   * ボタン押下時の処理
   */
  onClick?: () => void;
};
export const Button = ({
  color,
  backgroundColor,
  size = "md",
  label,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{
        padding: "10px",
        borderRadius: 4,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.gray_200,
        cursor: "pointer",
        color: colors[color],
        backgroundColor: colors[backgroundColor],
      }}
      {...props}
    >
      {label}
    </button>
  );
};
