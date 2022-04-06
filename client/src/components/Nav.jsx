import { Link } from 'react-router-dom'


const Nav =() => {

    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Posts</Link>
            
        </nav>
    ) 
    
}

export default Nav