import './App.scss'
import DailyNote from './components/organisms/dailyNote/DailyNote'

const App = () => {
  return (
    <div className='container'>

      <div className='header'>
        <div className='line'></div>
        <h2>Weekly Schedule</h2>
        <div className='line'></div>
      </div>

      <div className='notes-container'>
        <DailyNote />
        <DailyNote />
        <DailyNote />
        <DailyNote />
        <DailyNote />
        <DailyNote />
        <DailyNote />
        <DailyNote />

      </div>

    </div>
  )
}

export default App
