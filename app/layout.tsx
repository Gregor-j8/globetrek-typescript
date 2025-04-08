'use client'

import './globals.css'
import { HandleLikes } from '../pages/src/context/LikeContext'
import { NewPostHolder } from '../pages/src/context/NewPostContext'
import { EditPostProvider } from '../pages/src/context/EditPostContext'
import { CurrentUserContext } from '../pages/src/context/CurrentUserContext'
import { Authorized } from '../pages/src/views/Authorized'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Authorized>
          <HandleLikes>
            <NewPostHolder>
              <EditPostProvider>
                <CurrentUserContext>
                  {children}
                </CurrentUserContext>
              </EditPostProvider>
            </NewPostHolder>
          </HandleLikes>
        </Authorized>
      </body>
    </html>
  )
}

