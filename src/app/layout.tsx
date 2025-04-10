'use client'
import '../styles/globals.css'
import { HandleLikes } from '../context/LikeContext'
import { NewPostHolder } from '../context/NewPostContext'
import { EditPostProvider } from '../context/EditPostContext'
import { CurrentUserContext } from '../context/CurrentUserContext'
import { Authorized } from '../views/Authorized'
import React from 'react'

// export const metadata = {
//   title: 'GlobeTrek',
//   description: 'Explore the world together',
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <HandleLikes>
            <NewPostHolder>
              <EditPostProvider>
                <CurrentUserContext>
                  {children}
                </CurrentUserContext>
              </EditPostProvider>
            </NewPostHolder>
          </HandleLikes>
      </body>
    </html>
  )
}

