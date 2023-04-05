import styled from 'styled-components'

export const Button = styled.button`
 /*  border: 1px solid var(--color-gray-700);
  border-radius: 4px;
  font-size: 1rem;
  padding: 2px 8px;
  text-align: center;
  background-color: var(--color-gray-900);
  font-weight: 500;
  color: #000;
  transition: transform 150ms, background-color 150ms; */

box-shadow:inset 0px 1px 0px 0px #ffffff;
background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
background-color:#ededed;
border-radius:6px;
border:1px solid #dcdcdc;
display:inline-block;
cursor:pointer;
color:#777777;
font-family:Arial;
font-size:15px;
font-weight:bold;
padding:6px 24px;
text-decoration:none;
text-shadow:0px 1px 0px #ffffff;
margin-top: 8px;
}
&:hover {
background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
background-color:#dfdfdf;
}
&:active {
position:relative;
top:1px;
`
