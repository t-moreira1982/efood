import styled from 'styled-components'
import massaBkg from '../../assets/images/massabackground.png'
import { colors } from '../../styles'

export const BarContainer = styled.div`
  margin-top: -240px;
  margin-bottom: 56px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${massaBkg});
  background-size: cover;
  width: 100%;
  height: 280px;
  position: relative;
  color: ${colors.white};
`
export const FoodType = styled.h3`
  font-size: 32px;
  font-weight: 100;
  padding-top: 25px;
`
export const RestaurantName = styled.h3`
  font-size: 32px;
  font-weight: 900;
  display: flex;
  padding-top: 150px;
`
