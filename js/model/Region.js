'use strict';

import { Position } from './Position.js';

export const MIN_X = 0, MAX_X = 6400;
export const MIN_Y = 0, MAX_Y = 12800;
export const REGION_WIDTH = 64;
export const REGION_HEIGHT = 64;

export class Region {
	constructor(id) {
		this.id = id;
	}

	static fromPosition(position) {
		return Region.fromCoordinates(position.x, position.y);
	}

	static fromCoordinates(x, y) {
		return new Region((x >> 6) | (y >> 6) << 7);
	}

	toCentrePosition() {
		const position = this.toPosition();
		position.x += REGION_WIDTH / 2;
		position.y += REGION_HEIGHT / 2;
		return position;
	}

	toPosition() {
		return new Position((this.id & 0x7F) << 6, (this.id >> 7) << 6, 0);
	}
}