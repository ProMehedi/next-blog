import MainNav from './MainNav'

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
      <main>{children}</main>
    </>
  )
}

export default Layout
