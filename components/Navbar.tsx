import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import picture from "../public/k.png";
import {useRouter} from "next/router";
import { resolveHref } from "next/dist/shared/lib/router/router";

const Menu = styled.div`
  background-color: #0e2a47;
  /* border:5px solid green;   */
  top: 0;
  display: flex;
  position: fixed;
  box-shadow: 0 0 5px 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 100;
`;
// const TextBox = styled.Link`
//         /* border: 2px white solid;
//         border-radius:5px; */
//         display:flex;
//         margin-top:1rem;
//         margin-bottom:1rem;
//         padding: 1rem 1.5rem 1rem;
//         div{
//         color:#fff;
//         font-size: 18px;
//         font-weight: bold;
//         padding: 0 2rem;
//         cursor:pointer;

//         @media (max-width:640px){
//             padding:0 1rem;
//     }
//     }
// `;

const TextNav = styled.div`
  color: #fff;
  font-size: 0.2;
  font-weight: bold;
  cursor: pointer;
  margin: 0 15px;
  padding: 5px 10px 10px;
  text-transform: uppercase;
  height: 100%;
  line-height: 4.1em;
  @media (max-width: 640px) {
    padding: 5px 5px 10px;
  }
`;

// used to hold the image at the top left of the screen
// NextJS image component is wrapped in a Span element and it's position is set to absolute so it can be displayed as whole on the top left of the screen
// Read More : https://github.com/vercel/next.js/discussions/18739
const ImageHolder = styled.div`
  :hover {
    transform: scale(1.04);
    cursor: pointer;
  }
  > span {
    max-width: 64px;
    max-height: 64px;
  }
  position: absolute;
  top: 0.5rem;
  left: 0;
  width: 64px;
  height: 64px;

  @media (max-width: 640px) {
    display: none;
  }
`;
//The Navbar that will stay fixed at the top of the screen

const LinkBar = ({ current }) => {
    const HighlightBorder = (event) => {
        console.log(
            (event.target.parentNode.style["border-bottom-color"] = "white")
        );
    };

    const deHighlightBorder = (event) => {
        console.log(
            (event.target.parentNode.style["border-bottom-color"] = "transparent")
        );
    };
    
    return (
        <>
            <Link href="/" passHref>
                
                {current == '/' ? (
                    <a style={{ borderBottom: "white solid 3px" }}>
                        <TextNav>Home</TextNav>
                    </a>
                ) : (
                    <a style={{ borderBottom: "transparent solid 3px" }}>
                        <TextNav
                            onMouseEnter={HighlightBorder}
                            onMouseLeave={deHighlightBorder}
                        >
                            Home
                        </TextNav>
                    </a>
                )}
            </Link>
            <Link href="/projects" passHref>
                {current == '/projects' ? (
                    <a style={{ borderBottom: "white solid 3px" }}>
                        <TextNav>Projects</TextNav>
                    </a>
                ) : (
                    <a style={{ borderBottom: "transparent solid 3px" }}>
                        <TextNav
                            onMouseEnter={HighlightBorder}
                            onMouseLeave={deHighlightBorder}
                        >
                            Projects
                        </TextNav>
                    </a>
                )}
            </Link>
            <Link href="/blog" passHref>
                {current == '/blog' ? (
                    <a style={{ borderBottom: "white solid 3px" }}>
                        <TextNav>Blog</TextNav>
                    </a>
                ) : (
                    <a style={{ borderBottom: "transparent solid 3px" }}>
                        <TextNav
                            onMouseEnter={HighlightBorder}
                            onMouseLeave={deHighlightBorder}
                        >
                            Blog
                        </TextNav>
                    </a>
                )}
            </Link>
            <Link href="/contact" passHref>
                {current == '/contact' ? (
                    <a style={{ borderBottom: "white solid 3px" }}>
                        <TextNav>Contact</TextNav>
                    </a>
                ) : (
                    <a style={{ borderBottom: "transparent solid 3px" }}>
                        <TextNav
                            onMouseEnter={HighlightBorder}
                            onMouseLeave={deHighlightBorder}
                        >
                            Contact
                        </TextNav>
                    </a>
                )}
            </Link>
        </>
    );
};
const Navbar = (stuff) => {
    const router = useRouter()
    console.log(router.pathname)
  


    

    return (
        <Menu>
            <Link href="/">
                <ImageHolder>
                    <Image src={picture}></Image>
                </ImageHolder>
            </Link>

            <LinkBar current={router.pathname} />
        </Menu>
    );
};

export default Navbar;
