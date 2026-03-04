import { defineStore } from 'pinia'

interface Point {
  id: string
  [key: string]: any
}

interface State {
  points: Record<string, Point>
  showLabel: boolean
}

export const useTestPageStore = defineStore('testPage', {
  state: (): State => ({
    points: {},
    showLabel: false,
  }),

  getters: {
    getPointById: (state) => (id: string) => {
      return state.points[id] || {}
    },
    showLabel: (state) => state.showLabel,
  },

  actions: {
    setPoints(points: Point[]) {
      const data: Record<string, Point> = {}
      points.forEach((point) => {
        data[point.id] = point
      })
      this.points = data
    },

    updatePoint(payload: { id: string; data: Partial<Point> }) {
      const { id, data } = payload
      if (this.points[id]) {
        this.points[id] = { ...this.points[id], ...data }
      }
    },

    setShowLabel(show: boolean) {
      this.showLabel = show
    },
  },
})
