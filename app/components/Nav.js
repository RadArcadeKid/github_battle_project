import React from 'react'
import { ThemeConsumer } from '../contexts/theme'



export default function Nav () {
    console.log('I am invisible')
    // render-prop pattern! 
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className='row space-between'>
                    <button
                        style={{fontSize: 30}}
                        className='btn-clear'
                        onClick={toggleTheme}
                    >
                        
                        {theme === 'light' ? '🌙' : '💡'}

                    </button>
                </nav>
            )}
        </ThemeConsumer>
    )
}