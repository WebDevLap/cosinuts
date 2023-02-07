import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={1.5}
    width={411}
    height={710}
    viewBox="0 0 411 710"
    backgroundColor="#58f95a"
    foregroundColor="#fff157"
    // {...props}
  >
    <rect x="-528" y="1146" rx="0" ry="0" width="258" height="80" /> 
    <rect x="69" y="51" rx="0" ry="0" width="1" height="1" /> 
    <rect x="15" y="15" rx="26" ry="26" width="379" height="391" /> 
    <rect x="15" y="428" rx="5" ry="5" width="228" height="24" /> 
    <rect x="15" y="465" rx="5" ry="5" width="380" height="90" /> 
    <rect x="131" y="584" rx="5" ry="5" width="98" height="23" /> 
    <rect x="15" y="584" rx="5" ry="5" width="98" height="23" /> 
    <rect x="15" y="637" rx="13" ry="13" width="55" height="55" /> 
    <rect x="77" y="637" rx="13" ry="13" width="55" height="55" /> 
    <rect x="139" y="637" rx="13" ry="13" width="55" height="55" /> 
    <rect x="201" y="635" rx="13" ry="13" width="184" height="55" />
  </ContentLoader>
)

export default Skeleton