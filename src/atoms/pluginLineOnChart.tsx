export const Plugins = [
  {
    afterDraw: (chart: { tooltip?: any; scales?: any; ctx?: any }) => {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const activePoint = chart.tooltip._active[0];
        const { ctx } = chart;
        const { x } = activePoint.element;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#1C2128";
        ctx.stroke();
        ctx.restore();
      }
    },
  },
] as any;
