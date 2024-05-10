import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"


const Home = () => {
  const loggedIn = {firstName:"Itachi",lastName:"Uchiha",email:"itachi@gmail.com"}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || `Guest`}
          subtext="Access and manage your account and transactions."
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={2123.69}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:169.33},{currentBalance:1954.36}]}
      />
    </section>
  )
}

export default Home
