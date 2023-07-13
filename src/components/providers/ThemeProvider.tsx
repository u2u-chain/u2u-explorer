import {ConfigProvider, theme} from "antd";
import React from "react";

const ThemeProvider = ({children}: { children: React.ReactNode }) => {
  const {defaultAlgorithm} = theme;
  
  return <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#16936c',
        colorLink: "#16936c",
        colorLinkActive: "#16936c",
        colorLinkHover: "#16936c99",
        fontFamily: 'StyreneAWeb-Regular',
        colorBgBase:  '#f8f9fa',
        colorBgContainer: '#fff',
        colorBgLayout:  '#f8f9fa',
        colorTextBase: '#212529',
        colorTextHeading: '#242424',
        colorTextPlaceholder: "",
        fontSize: 13,
        colorBorder: '#16936c',
        fontSizeLG: 12,
        borderRadiusLG: 10,
        borderRadius: 10,
        colorWhite: "#fff",
        colorError: "#ff6161"
      },
      algorithm: defaultAlgorithm,
    }}
  >
    {children}
  </ConfigProvider>

}

export default ThemeProvider;
