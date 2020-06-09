class Polygon {
    constructor(heights) {
        var polygon_perimeter = 0;
        for (var i =0 ;i<heights.length;i++)
        {
            polygon_perimeter += heights[i];
        }
        this.my_perimeter = polygon_perimeter;
    }
    perimeter()
    {
        return this.my_perimeter;
    }
}
