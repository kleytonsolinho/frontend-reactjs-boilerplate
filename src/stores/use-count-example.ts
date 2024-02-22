import { create } from 'zustand'

type useCountExampleType = {
	count: number
	increaseCount: () => void
	removeAllCount: () => void
}

export const useCountExample = create<useCountExampleType>((set) => ({
	count: 0,
	increaseCount: () => set((state) => ({ count: state.count + 1 })),
	removeAllCount: () => set({ count: 0 }),
}))
