export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          tags: string[]
          user_id: string
          category: string
          is_public: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          tags?: string[]
          user_id: string
          category: string
          is_public?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          tags?: string[]
          user_id?: string
          category?: string
          is_public?: boolean
        }
      }
      notes: {
        Row: {
          id: string
          created_at: string
          course_id: string
          user_id: string
          image_url: string
          extracted_text: string | null
          summary: string | null
          explanation: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          course_id: string
          user_id: string
          image_url: string
          extracted_text?: string | null
          summary?: string | null
          explanation?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          course_id?: string
          user_id?: string
          image_url?: string
          extracted_text?: string | null
          summary?: string | null
          explanation?: string | null
        }
      }
      profiles: {
        Row: {
          id: string
          created_at: string
          username: string
          bio: string | null
          avatar_url: string | null
        }
        Insert: {
          id: string
          created_at?: string
          username: string
          bio?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          username?: string
          bio?: string | null
          avatar_url?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}