// noinspection JSUnusedGlobalSymbols

/**
 * Extended javascript native Array to add a shuffle() method.
 * 
 * Created on 1400/2/16 (2021/5/6).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */
export default class ShufflableArray extends Array {
	/**
	 * Shuffle the array {@link https://en.wikipedia.org/wiki/In-place_algorithm in-place} and returns *the shuffled 
	 * array (`this`)*.
	 * <br>
	 * Based on this answer: {@link https://stackoverflow.com/a/12646864/5318303}
	 * @returns {ShufflableArray}
	 */
	shuffle() {
		for (let i = this.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this[i], this[j]] = [this[j], this[i]]
		}
		return this
	}
}
