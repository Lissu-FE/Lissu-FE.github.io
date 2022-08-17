import styled from 'styled-components'

export const IndexMainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #141414;
`

export const PostListWrapper = styled.div`
  margin-top: -5rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 0 0.9375rem;
`
