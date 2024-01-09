import './App.css'
import Card from './components/Card/Card'

function App() {
 
  return (
    <div className='card-wrapper'>
      <Card title="Dog 1" src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Card title="Dog 2" src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default App
