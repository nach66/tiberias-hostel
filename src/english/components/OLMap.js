import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Title from './Title';
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction'
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer'
import { ScaleLine, defaults as DefaultControls } from 'ol/control'
import Grid from '@material-ui/core/Grid'
import VectorS from 'ol/source/Vector'
import {Icon, Style} from 'ol/style'
import {fromLonLat} from 'ol/proj'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import { Map, View } from 'ol'
import {OSM} from 'ol/source'
import 'ol/ol.css'

export default class OLMap extends Component {    

    componentDidMount() {

        const map = new Map({
            interactions: defaultInteractions().extend([
                new DragRotateAndZoom()
            ]),
            target: 'map',
            layers: [
                new TileLayer({source: new OSM()})
            ],
            controls: DefaultControls().extend([
                new ScaleLine(),
            ]),
            view: new View({
                center: fromLonLat([35.539460, 32.7885]),
                zoom: 13
            })
        });

        const layer = new VectorLayer({
            source: new VectorS({
                features: [
                    new Feature({
                        geometry: new Point(fromLonLat([35.53947, 32.7887]))
                    })
                ]
            }),
            style: new Style({
                image: new Icon({
                  src: 'https://openlayers.org/en/latest/examples/data/icon.png'
                })
              })
        });
        map.addLayer(layer);
    }


    render() {
        return (
            <>
                <section className="services">
                    <Title title="LOCATION & DIRECTIONS"/>
                    <h6 className="lang" style={{fontWeight: '600'}}>
                    3 Minutes from the Bus station. 3 Minutes from the Water line... </h6>
                    <Grid container>
                        <Grid item xs={12}>
                            <div id='map' className="map" >
                            </div>
                        </Grid>
                    </Grid>

                    <h6 className="lang">Directions to Hostel & Bus Schedules -</h6>
                    
                    <div>
                        <Link target={"_blank"} to="/tlv" className="btn-primary2 btns-map">from Tel Aviv</Link>
                        <Link target={"_blank"} to="/haifa" className="btn-primary2 btns-map">from Haifa</Link>
                        <Link target={"_blank"} to="/jerusalem" className="btn-primary2 btns-map">from Jerusalem</Link>
                        <Link target={"_blank"} to="/nazeret" className="btn-primary2 btns-map">from Nazareth</Link>
                    </div >

                </section>
            </>
        );
    }
}