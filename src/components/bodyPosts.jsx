import React from "react";
import styled from "styled-components";
import { useApi } from "./context";
import { Link } from "react-router-dom";

export default function () {
  const api = useApi();
  const posts = api.bodyPosts;
  const apiLink = api.Link;

  return (
    <>
      <Wrapper>
        {posts.map((post) => (
          <StyledLink key={post._id} to={`/product/${post.slug}`}>
            <Post>
              <Image>
                <img src={apiLink + "/" + post.CoverImage.path} />
              </Image>
              <Title>{post.Title.substring(0, 45)}...</Title>
            </Post>
          </StyledLink>
        ))}
        <FillerDiv></FillerDiv>
        <FillerDiv></FillerDiv>
        <FillerDiv></FillerDiv>
        <FillerDiv></FillerDiv>
      </Wrapper>
    </>
  );
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: inherit;
  }
`;

const FillerDiv = styled.div`
  height: 0;
  width: 200px;
`;

const Title = styled.h3`
  font-size: 0.9em;
  padding-top: 10px;
`;

const Post = styled.div`
  width: 200px;
`;

const Image = styled.div`
  width: 100%;
  padding-top: 60%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto;
    margin: auto;
    position: absolute;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;
