import "./DimensionLines.scss";

import { useEffect } from "react";
import { useDimension } from "../../contexts/useDimension";

export const DimensionLines = () => {
  const [dimension] = useDimension();

  useEffect(() => {
    const modelViewer = document.querySelector("#model");

    const dimElements = [...modelViewer.querySelectorAll('button'), modelViewer.querySelector('#dimLines')];
    function setVisibility(visible) {
      dimElements.forEach((element) => {
        if (visible) {
          element.classList.remove('hide');
        } else {
          element.classList.add('hide');
        }
      });
    }

    modelViewer.addEventListener('ar-status', (event) => {
      setVisibility(event.detail.status !== 'session-started');
    });

    function drawLine(svgLine, dotHotspot1, dotHotspot2, dimensionHotspot) {
      if (dotHotspot1 && dotHotspot2) {
        svgLine.setAttribute('x1', dotHotspot1.canvasPosition.x);
        svgLine.setAttribute('y1', dotHotspot1.canvasPosition.y);
        svgLine.setAttribute('x2', dotHotspot2.canvasPosition.x);
        svgLine.setAttribute('y2', dotHotspot2.canvasPosition.y);

        if (dimensionHotspot && !dimensionHotspot.facingCamera) {
          svgLine.classList.add('hide');
        }
        else {
          svgLine.classList.remove('hide');
        }
      }
    }

    const dimLines = modelViewer.querySelectorAll('line');

    const renderSVG = () => {
      drawLine(dimLines[0], modelViewer.queryHotspot('hotspot-dot+X-Y+Z'), modelViewer.queryHotspot('hotspot-dot+X-Y-Z'), modelViewer.queryHotspot('hotspot-dim+X-Y'));
      drawLine(dimLines[1], modelViewer.queryHotspot('hotspot-dot+X-Y-Z'), modelViewer.queryHotspot('hotspot-dot+X+Y-Z'), modelViewer.queryHotspot('hotspot-dim+X-Z'));
      drawLine(dimLines[2], modelViewer.queryHotspot('hotspot-dot+X+Y-Z'), modelViewer.queryHotspot('hotspot-dot-X+Y-Z')); // always visible
      drawLine(dimLines[3], modelViewer.queryHotspot('hotspot-dot-X+Y-Z'), modelViewer.queryHotspot('hotspot-dot-X-Y-Z'), modelViewer.queryHotspot('hotspot-dim-X-Z'));
      drawLine(dimLines[4], modelViewer.queryHotspot('hotspot-dot-X-Y-Z'), modelViewer.queryHotspot('hotspot-dot-X-Y+Z'), modelViewer.queryHotspot('hotspot-dim-X-Y'));
    };

    modelViewer.addEventListener('load', () => {
      const center = modelViewer.getBoundingBoxCenter();
      const size = modelViewer.getDimensions();
      const x2 = size.x / 2;
      const y2 = size.y / 2;
      const z2 = size.z / 2;

      modelViewer.updateHotspot({
        name: 'hotspot-dot+X-Y+Z',
        position: `${center.x + x2} ${center.y - y2} ${center.z + z2}`
      });

      modelViewer.updateHotspot({
        name: 'hotspot-dim+X-Y',
        position: `${center.x + x2 * 1.2} ${center.y - y2 * 1.1} ${center.z}`
      });
      modelViewer.querySelector('button[slot="hotspot-dim+X-Y"]').textContent =
        `${(size.z * 100).toFixed(0)} cm`;

      modelViewer.updateHotspot({
        name: 'hotspot-dot+X-Y-Z',
        position: `${center.x + x2} ${center.y - y2} ${center.z - z2}`
      });

      modelViewer.updateHotspot({
        name: 'hotspot-dim+X-Z',
        position: `${center.x + x2 * 1.2} ${center.y} ${center.z - z2 * 1.2}`
      });
      modelViewer.querySelector('button[slot="hotspot-dim+X-Z"]').textContent =
        `${(size.y * 100).toFixed(0)} cm`;

      modelViewer.updateHotspot({
        name: 'hotspot-dot+X+Y-Z',
        position: `${center.x + x2} ${center.y + y2} ${center.z - z2}`
      });

      modelViewer.updateHotspot({
        name: 'hotspot-dim+Y-Z',
        position: `${center.x} ${center.y + y2 * 1.1} ${center.z - z2 * 1.1}`
      });
      modelViewer.querySelector('button[slot="hotspot-dim+Y-Z"]').textContent =
        `${(size.x * 100).toFixed(0)} cm`;

      modelViewer.updateHotspot({
        name: 'hotspot-dot-X+Y-Z',
        position: `${center.x - x2} ${center.y + y2} ${center.z - z2}`
      });

      modelViewer.updateHotspot({
        name: 'hotspot-dim-X-Z',
        position: `${center.x - x2 * 1.2} ${center.y} ${center.z - z2 * 1.2}`
      });
      modelViewer.querySelector('button[slot="hotspot-dim-X-Z"]').textContent =
        `${(size.y * 100).toFixed(0)} cm`;

      modelViewer.updateHotspot({
        name: 'hotspot-dot-X-Y-Z',
        position: `${center.x - x2} ${center.y - y2} ${center.z - z2}`
      });

      modelViewer.updateHotspot({
        name: 'hotspot-dim-X-Y',
        position: `${center.x - x2 * 1.2} ${center.y - y2 * 1.1} ${center.z}`
      });
      modelViewer.querySelector('button[slot="hotspot-dim-X-Y"]').textContent =
        `${(size.z * 100).toFixed(0)} cm`;

      modelViewer.updateHotspot({
        name: 'hotspot-dot-X-Y+Z',
        position: `${center.x - x2} ${center.y - y2} ${center.z + z2}`
      });

      renderSVG();

      modelViewer.addEventListener('camera-change', renderSVG);
    })
  }, [])

  useEffect(() => {
    const modelViewer = document.querySelector("#model");
    const dimElements = [...modelViewer.querySelectorAll('.dim'),
    ...modelViewer.querySelectorAll('.dot'),
    modelViewer.querySelector('#dimLines')];

    dimElements.forEach((element) => {
      if (dimension) {
        element.classList.remove('hide');
      } else {
        element.classList.add('hide');
      }
    });

  }, [dimension])

  return (
    <>
      <button slot="hotspot-dot+X-Y+Z" className="dot" data-position="1 -1 1" data-normal="1 0 0"></button>
      <button slot="hotspot-dim+X-Y" className="dim" data-position="1 -1 0" data-normal="1 0 0"></button>
      <button slot="hotspot-dot+X-Y-Z" className="dot" data-position="1 -1 -1" data-normal="1 0 0"></button>
      <button slot="hotspot-dim+X-Z" className="dim" data-position="1 0 -1" data-normal="1 0 0"></button>
      <button slot="hotspot-dot+X+Y-Z" className="dot" data-position="1 1 -1" data-normal="0 1 0"></button>
      <button slot="hotspot-dim+Y-Z" className="dim" data-position="0 -1 -1" data-normal="0 1 0"></button>
      <button slot="hotspot-dot-X+Y-Z" className="dot" data-position="-1 1 -1" data-normal="0 1 0"></button>
      <button slot="hotspot-dim-X-Z" className="dim" data-position="-1 0 -1" data-normal="-1 0 0"></button>
      <button slot="hotspot-dot-X-Y-Z" className="dot" data-position="-1 -1 -1" data-normal="-1 0 0"></button>
      <button slot="hotspot-dim-X-Y" className="dim" data-position="-1 -1 0" data-normal="-1 0 0"></button>
      <button slot="hotspot-dot-X-Y+Z" className="dot" data-position="-1 -1 1" data-normal="-1 0 0"></button>
      <svg id="dimLines" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="dimensionLineContainer">
        <line className="dimensionLine"></line>
        <line className="dimensionLine"></line>
        <line className="dimensionLine"></line>
        <line className="dimensionLine"></line>
        <line className="dimensionLine"></line>
      </svg>
    </>
  )
}
