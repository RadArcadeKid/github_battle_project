import React from 'react'
import { FaRegBell } from 'react-icons/fa';
import { ThemeConsumer } from '../contexts/theme'

export default function Nav ({switchComponent, selected}) {

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


                    <button
                        style={'popular' === selected ? { color: 'rgb(0, 200, 200)' } : null}
                        className='btn-clear nav-link-big'
                        onClick={() => (
                            switchComponent('popular')
                            )}
                    >
                        Popular
                    </button>


                    <button
                        style={'battle' === selected ? { color: 'rgb(0, 200, 200)' } : null}
                        className='btn-clear nav-link-big'
                        onClick={() => switchComponent('battle')}
                    >
                        Battle
                    </button>



                    
                </nav>
            )}
        </ThemeConsumer>
    )
}