import MainGNB from '../organisms/MainGNB'
import { Outlet } from 'react-router-dom'
import * as S from '../../styles/layout/MainLayout'

const MainLayout = () => {
  return (
    <S.Container>
      <MainGNB />
      <main>
        <Outlet />
      </main>
    </S.Container>
  )
}

export default MainLayout