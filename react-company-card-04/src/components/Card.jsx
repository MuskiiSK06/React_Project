import {Bookmark} from 'lucide-react'

function Card(props) {
    
  return (
    <div className='card'>
                <div>
                    <header className='top'>
                        <img src={props.logo} />
                        <button>Save <Bookmark size={14} strokeWidth={2} /> </button>
                    </header>
                    <main className='center'>
                      <h3>{props.company} <span>{props.date}</span></h3>
                      <h2>{props.post}</h2>
                          <div className='tags'>
                            <h4>{props.tag1}</h4>
                            <h4>{props.tag2}</h4>
                          </div>
                    </main>
                </div>
                    <footer className='bottom'>
                    <div>
                      <h3>{props.pay}</h3>
                      <p>{props.location}</p>
                    </div>  
                    <button>Apply now</button> 
                </footer>
            </div>
  )
}

export default Card 