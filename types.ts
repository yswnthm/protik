export type CursorType = 'default' | 'view' | 'text' | 'link';

export interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
}

export interface SectionProps {
  id?: string;
}
