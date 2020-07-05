import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "jequalsone@gmail.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        HOW I BUILD MY PHYSIQUE THROUGH SELF-EXPERIMENTATION, BY{' '}
        <a href="https://instagram.com/jequalsone/">JIMMY LINDSEY</a>.
      </p>
    </div>
  )
}

export default Bio
