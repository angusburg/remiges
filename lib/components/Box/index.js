import styled from 'styled-components'
import Backgroundable from '~/metacomponents/Backgroundable'
import Sizable from '~/metacomponents/Sizable'

const Box = styled.div`
  display: flex;

  ${props =>
    props.horizontallyCenter &&
    `
      margin-left: auto;
      margin-right: auto;
    `};

  ${props => props.verticallyCenter && `align-items: center;`};
`

export default Backgroundable(Sizable(Box))