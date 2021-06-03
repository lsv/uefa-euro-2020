UEFA Euro 2020 (2021...)
------------------------

## Usage
To use the data in your app, you can use this link

https://raw.githubusercontent.com/lsv/uefa-euro-2020/master/data.json

Which will be updated

## The data

The data is manually updated by me and maybe contributors - so if you see a error, or a result that has not been updated, please change it with a PR :)

## [Examples](examples/README.md)

## Data explanation

#### Matches in general

* When a match is finished, the `"finished": false,` will be updated to true.
* Check the date to see if a match is in progress - if home score and away score is still `null` and the datetime is older than now, then the match is in progress.
* When a team scores, the `home_result` and/or `away_result` will be updated - The match is still in progress, until `finished` has been changed
* In knockout, also `home_penalty` and `away_penalty` is used, if a match is in penalty shootout.

#### Groups

* Each group have winner, runnerup, thirdplace and fourthplace - which will be updated when all matches in the group is finished.
* You can create your own group standings from the matches until the group has been decided.
* All places in each group if they have equal points/score - Then there is `disciplinary points` to decide - They will properly NOT be updated until a group is finished.
* If disciplinary points is still the same, the `rank` will be used.

#### Knockout phases

* When teams has been found for a knockout phase, the `"teams_found": false,` will be updated to true.
* Third place teams in knockouts can be quite difficult to figure out - But here is a schema of it.

<table style="text-align:center;">
<tbody><tr>
<th colspan="6">Third-placed teams<br>qualify from groups
</th>
<th rowspan="16">
</th>
<th>1B<br>vs
</th>
<th>1C<br>vs
</th>
<th>1E<br>vs
</th>
<th>1F<br>vs
</th></tr>
<tr>
<td><b>A</b></td>
<td><b>B</b></td>
<td><b>C</b></td>
<td><b>D</b></td>
<td></td>
<td></td>
<td>3A</td>
<td>3D</td>
<td>3B</td>
<td>3C
</td></tr>
<tr>
<td><b>A</b></td>
<td><b>B</b></td>
<td><b>C</b></td>
<td></td>
<td><b>E</b></td>
<td></td>
<td>3A</td>
<td>3E</td>
<td>3B</td>
<td>3C
</td></tr>
<tr>
<td><b>A</b></td>
<td><b>B</b></td>
<td><b>C</b></td>
<td></td>
<td></td>
<td><b>F</b></td>
<td>3A</td>
<td>3F</td>
<td>3B</td>
<td>3C
</td></tr>
<tr>
<td><b>A</b></td>
<td><b>B</b></td>
<td></td>
<td><b>D</b></td>
<td><b>E</b></td>
<td></td>
<td>3D</td>
<td>3E</td>
<td>3A</td>
<td>3B
</td></tr>
<tr>
<td><b>A</b></td>
<td><b>B</b></td>
<td></td>
<td><b>D</b></td>
<td></td>
<td><b>F</b></td>
<td>3D</td>
<td>3F</td>
<td>3A</td>
<td>3B
</td></tr>
<tr>
<td><b>A</b></td>
<td><b>B</b></td>
<td></td>
<td></td>
<td><b>E</b></td>
<td><b>F</b></td>
<td>3E</td>
<td>3F</td>
<td>3B</td>
<td>3A
</td></tr>
<tr>
<td><b>A</b></td>
<td></td>
<td><b>C</b></td>
<td><b>D</b></td>
<td><b>E</b></td>
<td></td>
<td>3E</td>
<td>3D</td>
<td>3C</td>
<td>3A
</td></tr>
<tr>
<td><b>A</b></td>
<td></td>
<td><b>C</b></td>
<td><b>D</b></td>
<td></td>
<td><b>F</b></td>
<td>3F</td>
<td>3D</td>
<td>3C</td>
<td>3A
</td></tr>
<tr>
<td><b>A</b></td>
<td></td>
<td><b>C</b></td>
<td></td>
<td><b>E</b></td>
<td><b>F</b></td>
<td>3E</td>
<td>3F</td>
<td>3C</td>
<td>3A
</td></tr>
<tr>
<td><b>A</b></td>
<td></td>
<td></td>
<td><b>D</b></td>
<td><b>E</b></td>
<td><b>F</b></td>
<td>3E</td>
<td>3F</td>
<td>3D</td>
<td>3A
</td></tr>
<tr>
<td></td>
<td><b>B</b></td>
<td><b>C</b></td>
<td><b>D</b></td>
<td><b>E</b></td>
<td></td>
<td>3E</td>
<td>3D</td>
<td>3B</td>
<td>3C
</td></tr>
<tr>
<td></td>
<td><b>B</b></td>
<td><b>C</b></td>
<td><b>D</b></td>
<td></td>
<td><b>F</b></td>
<td>3F</td>
<td>3D</td>
<td>3C</td>
<td>3B
</td></tr>
<tr>
<td></td>
<td><b>B</b></td>
<td><b>C</b></td>
<td></td>
<td><b>E</b></td>
<td><b>F</b></td>
<td>3F</td>
<td>3E</td>
<td>3C</td>
<td>3B
</td></tr>
<tr>
<td></td>
<td><b>B</b></td>
<td></td>
<td><b>D</b></td>
<td><b>E</b></td>
<td><b>F</b></td>
<td>3F</td>
<td>3E</td>
<td>3D</td>
<td>3B
</td></tr>
<tr>
<td></td>
<td></td>
<td><b>C</b></td>
<td><b>D</b></td>
<td><b>E</b></td>
<td><b>F</b></td>
<td>3F</td>
<td>3E</td>
<td>3D</td>
<td>3C
</td></tr></tbody></table>
