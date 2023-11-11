import { describe, it, expect } from 'vitest'
import Listbox from '@/components/input/Listbox.vue'
import { mountSuspended } from 'nuxt-vitest/utils'

const mountComponent = (options = {}) => mountSuspended(Listbox, {
    global: {
        stubs: ['FontAwesomeIcon', 'Listbox']
    },
    props: {
        modelValue: {},
        cls: '',
        options: [
            {}
        ],
    },
    ...options,
}) 

describe('/components/input/Listbox.spec.ts', async () => {
    it('Check if component exists', async () => {
        const wrapper = await mountComponent()
        expect(wrapper.vm).toBeTruthy()
    })
})