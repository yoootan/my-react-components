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
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.gray_200,
        cursor: "pointer",
        color: colors[color],
        backgroundColor: colors[backgroundColor],
        ...getSizeStyle(size),
      }}
      {...props}
    >
      {label}
    </button>
  );
};

const getSizeStyle = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "md":
      return {
        fontSize: "14px",
        padding: "10px",
      };
    case "lg":
      return {
        fontSize: "16px",
        padding: "12px",
      };
    case "sm":
      return {
        fontSize: "12px",
        padding: "8px",
      };
  }
};
