export interface Entity {
    location: {
        lat: number;
        lon: number;
    };
    popupText(): string;
    weight: number;
}

export class TrackingMap {
    private googleMap: google.maps.Map;

    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1.6,
            center: {
                lat: 0,
                lng: 20,
            },
            mapId: 'needed-for-markers',
        });
    }

    attachMarker(entity: Entity): void {
        const marker = new google.maps.marker.AdvancedMarkerElement({
            map: this.googleMap,
            position: {
                lat: entity.location.lat,
                lng: entity.location.lon,
            }
        });

        marker.addListener('click', () => {
            const popup = new google.maps.InfoWindow({
                content: entity.popupText()
            });
            popup.setPosition(marker.position)
            popup.open(this.googleMap);
        });


    }
}