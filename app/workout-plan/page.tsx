'use client'
import React from 'react'
import FreeWorkoutPlan from '@/components/free-workout-plan'
import withAuth from '@/components/hoc/with-auth'

const WorkoutPlanPage = () => {
  return (
    <FreeWorkoutPlan />
  )
}

export default withAuth(WorkoutPlanPage)
