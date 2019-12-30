import React from 'react'
import { ReactEditor, RenderElementProps, RenderLeafProps } from 'slate-react'

export interface Editor extends ReactEditor {
  controls: TextEditorControl[]

  onKeyDown(event: KeyboardEvent): void
  renderEditable(props: {
    children: React.ReactNode
    editable: boolean
  }): React.ReactNode
  renderElement(props: RenderElementProps): JSX.Element
  renderLeaf(props: RenderLeafProps): JSX.Element
}

export interface TextEditorControl {
  icon: React.ReactNode
  title: string
  isActive(): boolean
  onClick(): void
}

export type TextEditorPlugin = (editor: Editor) => Editor
