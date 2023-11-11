import { describe, it, expect } from 'vitest'
import Card from '@/components/container/Card.vue'
import { mountSuspended } from 'nuxt-vitest/utils'

const mountComponent = (options = {}) => mountSuspended(Card, {
    props: {},
    ...options,
}) 

describe('/components/container/Card.spec.ts', async () => {
    it('Check if component exists', async () => {
        const wrapper = await mountComponent()
        expect(wrapper.vm).toBeTruthy()
    })

    it('getBackgroundColor should return a random tailwind class', async () => {
        const wrapper = await mountComponent()
        const availableColors = ['bg-sky-500', 'bg-teal-500', 'bg-pink-500', 'bg-purple-500', 'bg-orange-500']
        const currentBackgroundColor = wrapper.classes()[0]
        expect(availableColors.includes(currentBackgroundColor)).toBeTruthy()
    })
})