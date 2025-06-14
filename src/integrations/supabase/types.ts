export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      connection_requests: {
        Row: {
          created_at: string
          id: string
          message: string
          receiver_profile_id: string
          sender_profile_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          receiver_profile_id: string
          sender_profile_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          receiver_profile_id?: string
          sender_profile_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "connection_requests_receiver_profile_id_fkey"
            columns: ["receiver_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connection_requests_sender_profile_id_fkey"
            columns: ["sender_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          archived_by_profile1: boolean
          archived_by_profile2: boolean
          created_at: string
          id: string
          last_message_at: string
          profile1_id: string
          profile2_id: string
        }
        Insert: {
          archived_by_profile1?: boolean
          archived_by_profile2?: boolean
          created_at?: string
          id?: string
          last_message_at?: string
          profile1_id: string
          profile2_id: string
        }
        Update: {
          archived_by_profile1?: boolean
          archived_by_profile2?: boolean
          created_at?: string
          id?: string
          last_message_at?: string
          profile1_id?: string
          profile2_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversations_profile1_id_fkey"
            columns: ["profile1_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_profile2_id_fkey"
            columns: ["profile2_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      job_company_insights: {
        Row: {
          category: string
          color: string
          created_at: string
          description: string | null
          details: string[]
          id: string
          job_id: string
        }
        Insert: {
          category: string
          color: string
          created_at?: string
          description?: string | null
          details: string[]
          id?: string
          job_id: string
        }
        Update: {
          category?: string
          color?: string
          created_at?: string
          description?: string | null
          details?: string[]
          id?: string
          job_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_company_insights_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_feedback: {
        Row: {
          created_at: string
          id: string
          job_id: string
          rating: number
          text: string
        }
        Insert: {
          created_at?: string
          id?: string
          job_id: string
          rating: number
          text: string
        }
        Update: {
          created_at?: string
          id?: string
          job_id?: string
          rating?: number
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_feedback_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_perks: {
        Row: {
          created_at: string
          icon: string
          id: string
          job_id: string
          label: string
        }
        Insert: {
          created_at?: string
          icon: string
          id?: string
          job_id: string
          label: string
        }
        Update: {
          created_at?: string
          icon?: string
          id?: string
          job_id?: string
          label?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_perks_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_tech_stack: {
        Row: {
          category: string
          color: string
          created_at: string
          description: string | null
          id: string
          job_id: string
          technologies: string[]
        }
        Insert: {
          category: string
          color: string
          created_at?: string
          description?: string | null
          id?: string
          job_id: string
          technologies: string[]
        }
        Update: {
          category?: string
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          job_id?: string
          technologies?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "job_tech_stack_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          avg_tenure: string | null
          company: string
          complexity: string | null
          confidence_score: number | null
          created_at: string
          description: string
          diversity_score: string | null
          id: string
          location: string
          mentorship_program: boolean | null
          posted: string
          problem_type: string | null
          salary: string
          satisfaction_score: number | null
          team_size: string | null
          title: string
          type: string
          updated_at: string
          values: string[] | null
          vibe: string | null
          work_style: string | null
        }
        Insert: {
          avg_tenure?: string | null
          company: string
          complexity?: string | null
          confidence_score?: number | null
          created_at?: string
          description: string
          diversity_score?: string | null
          id?: string
          location: string
          mentorship_program?: boolean | null
          posted: string
          problem_type?: string | null
          salary: string
          satisfaction_score?: number | null
          team_size?: string | null
          title: string
          type: string
          updated_at?: string
          values?: string[] | null
          vibe?: string | null
          work_style?: string | null
        }
        Update: {
          avg_tenure?: string | null
          company?: string
          complexity?: string | null
          confidence_score?: number | null
          created_at?: string
          description?: string
          diversity_score?: string | null
          id?: string
          location?: string
          mentorship_program?: boolean | null
          posted?: string
          problem_type?: string | null
          salary?: string
          satisfaction_score?: number | null
          team_size?: string | null
          title?: string
          type?: string
          updated_at?: string
          values?: string[] | null
          vibe?: string | null
          work_style?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          is_read: boolean
          sender_profile_id: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          is_read?: boolean
          sender_profile_id: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          is_read?: boolean
          sender_profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_profile_id_fkey"
            columns: ["sender_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_past_companies: {
        Row: {
          company: string
          created_at: string | null
          id: string
          profile_id: string | null
        }
        Insert: {
          company: string
          created_at?: string | null
          id?: string
          profile_id?: string | null
        }
        Update: {
          company?: string
          created_at?: string | null
          id?: string
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_past_companies_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_skills: {
        Row: {
          created_at: string | null
          id: string
          profile_id: string | null
          skill: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          profile_id?: string | null
          skill: string
        }
        Update: {
          created_at?: string | null
          id?: string
          profile_id?: string | null
          skill?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_skills_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          company: string
          created_at: string | null
          id: string
          image_url: string | null
          initials: string
          location: string
          mutual_connections: number | null
          name: string
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          company: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          initials: string
          location: string
          mutual_connections?: number | null
          name: string
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          company?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          initials?: string
          location?: string
          mutual_connections?: number | null
          name?: string
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_connections: {
        Row: {
          connected_profile_id: string | null
          created_at: string | null
          id: string
          is_connected: boolean | null
          user_id: string | null
        }
        Insert: {
          connected_profile_id?: string | null
          created_at?: string | null
          id?: string
          is_connected?: boolean | null
          user_id?: string | null
        }
        Update: {
          connected_profile_id?: string | null
          created_at?: string | null
          id?: string
          is_connected?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_connections_connected_profile_id_fkey"
            columns: ["connected_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
