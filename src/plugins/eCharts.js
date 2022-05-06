import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import {
  PieChart, LineChart, BarChart, ScatterChart,
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
} from 'echarts/components';

use([
  CanvasRenderer,
  PieChart,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  ScatterChart,
]);
