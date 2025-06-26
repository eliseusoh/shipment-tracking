//to generate random details eg lat and lon
import { faker } from '@faker-js/faker';
import { Entity } from './TrackingMap';

//implements is saying make sure Destination has all properties specifed by Entity
//helps point to true error source
export class Destination implements Entity {
    receiver: string;
    location: {
        lat: number;
        lon: number;
    };
    weight: number;

    constructor() {
        this.receiver = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lon: faker.location.longitude(),
        }
    }

    popupText(): string {
        return `<h3>Receiver Name: ${this.receiver}</h3>`
    }
}