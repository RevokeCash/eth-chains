import { Chain, Chains } from './types'
import { chains } from './chains'
export { NativeCurrency, Explorer, Parent } from './types'
export { ChainName, ChainId } from './enums'
export { Chain, Chains }

/**
 * Get a chain by its `id`.
 * @param id - The `id` of the chain
 * @returns The `Chain` object associated with the chain `id`
 */
export const getChainById = (id: number): Chain | undefined => chains[id]

/**
 * Get a chain by its `name`.
 * @param name - The `name` of the chain
 * @returns The `Chain` object associated with the chain `name`
 */
export const getChainByName = (name: string): Chain | undefined =>
  Object.values(chains).find(chain => chain.name === name) || {}

/**
 * Get a chain by its `id` or by its `name`.
 * @param idOrName - The name or id of the chain
 * @returns The `Chain` object associated with the `id` or `name`
 */
export const getChain = (idOrName: string | number): Chain | undefined =>
  typeof idOrName === 'number' ? getChainById(idOrName) : getChainByName(idOrName)

/**
 * Gets the entire `chains` object
 * @returns An object containing all chains
 */
export const allChains = (): Chains => chains

