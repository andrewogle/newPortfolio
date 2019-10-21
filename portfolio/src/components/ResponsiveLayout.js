import React from 'react';
import { useWindowDimensions } from "./WindowDimensionProvider";

const ResponsiveLayout = ({ breakPoint, renderMobile, renderDesktop }) => {
  const { width } = useWindowDimensions();

  return (width > breakPoint ? renderDesktop() : renderMobile() )
};

export default ResponsiveLayout;
