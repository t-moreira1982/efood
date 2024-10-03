import styled from 'styled-components'

export const FooterBar = styled.footer`
  padding: 40px;
  height: 298px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .socialIcon {
    width: 24px;
  }

  p {
    width: 480px;
    text-align: center;
    font-size: 10px;
    font-weight: 400;
  }
`
export const InfoFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`
export const Social = styled.div`
  margin-bottom: 80px;
  margin-top: 32px;
  display: flex;
  column-gap: 8px;
`

export const Logo = styled.img`
  width: 125px;
`
