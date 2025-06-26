import { faker } from '@faker-js/faker';
import { Entity } from './TrackingMap';

export class Cargo implements Entity {
    trackingID: string;
    location: {
        lat: number;
        lon: number;
    };
    weight: number;

    constructor() {
        this.trackingID = faker.string.uuid();
        this.location = {
            lat: faker.location.latitude(),
            lon: faker.location.longitude(),
        }
    }

    popupText(): string {
        return `<h3>Cargo Name: ${this.trackingID}</h3>`
    }
}