
import Section1 from './components/section1/Section1'

function App() {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1682976787974-6d44168ff811?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      para:'Prime customers, that have access to bank credit and are satisfied with the current product',
      tag:'Satisfied',
      color:'lightblue'
    },
    {
      img:'https://images.unsplash.com/photo-1637979910686-ef82f715361b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      para:'Prime customers, that have access to bank credit and are not satisfied with the current product',
      tag:'Underserved',
      color:'lightpink'
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
      para:'Customers from near-prime and sub-prime segments with no access to bank credit',
      tag:'Underbanked',
      color:'lightgreen'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661765955533-596918f986f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      para:'Customers from near-prime and sub-prime segments with access to bank credit',
      tag:'banked',
      color:'lightblue'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App