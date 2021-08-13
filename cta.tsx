import React from "react";
import styled from 'styled-components'
import ReactPlayer from 'react-player'


const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({props}) => props.align};;
`

const Link = styled.a`
 color:${({props}) => props.color};
  background-color:${({props}) => props.backgroundColor};
  padding:${({props}) => `${props.verticalPadding} 0`};
  max-width: ${({props}) => props.maxWidth};
  font-size:${({props}) => props.fontSize};
  border-radius: ${({props}) => props.bordeRadius};
  display: flex;
  justify-content: center;
  min-width: 100px;
  width: 100%;
  border: 2px solid black;
  transition: 0.4s;

  :hover {
    filter:brightness(${({props}) => props.hasHover && 0.85});
    color:${({props}) => props.color};
  }
`

export const CTA = (props: IProps) => {
  console.log(props,"props")
  return(
    <Container props={props}>
      <Link href={props.url} target={props.openNewTab ? "_blank" : "_self"} props={props}>
        {props.text} 
      </Link>
    </Container>
  )

}

interface IProps {
  text:string,
  align:string,
  color:string,
  url:string,
  backgroundColor:string,
  openNewTab: boolean,
  verticalPadding:string,
  maxWidth:string,
  fontSize:string,
  bordeRadius:string,
  hasHover:boolean
}

CTA.defaultProps = {
  text:"",
  align:"center",
  url:"",
  openNewTab: true,
  verticalPadding:'0px',
  maxWidth:'400px',
  hasHover:false
}