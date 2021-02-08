import React from 'react'
import { usePerfectDarkMode } from 'react-perfect-dark-mode'
console.log(window.__pdm__);
export const Toggle = () => {
    const { mode, updateMode } = usePerfectDarkMode()
    console.log('------->', mode);
    return (
        <button
            style={{ visibility: mode !== undefined ? 'visible' : 'hidden' }}
            onClick={() =>
                updateMode(
                    (mode, modes, modeIndex) => modes[(modeIndex + 1) % modes.length],
                )
            }
        >
            {mode}
        </button>
    )
}