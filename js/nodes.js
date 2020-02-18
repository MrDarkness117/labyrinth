const nodes = [
    {x: 480, y: 520},
    {x: 480, y: 570},
    {x: 480, y: 620},
    {x: 530, y: 520},
    // {x: 530, y: 570},
    {x: 530, y: 620},
    {x: 580, y: 520},
    {x: 580, y: 570},
    {x: 580, y: 620},
    {x: 550, y: 620}, // Only down, left, right
    {x: 550, y: 1030}, // Only up-right
    {x: 966, y: 1030}, // Only up-left
    {x: 966, y: 620}, // Only down-left
    {x: 840, y: 620}, // Only down-right
    {x: 840, y: 890}, // Only down-left
    {x: 640, y: 890}, // Only down-right
    {x: 640, y: 940}, // Only up-right
    {x: 880, y: 940}, // Only up-left
    {x: 880, y: 670}, // Only down-right
    {x: 920, y: 670}, // Only down-left
    {x: 920, y: 980}, // Only up-left
    {x: 600, y: 980}, // Only up-right
    {x: 600, y: 850}, // Only down-right
    {x: 790, y: 850}, // Only up-left
    {x: 790, y: 620}, // Only down-left
    {x: 670, y: 620}, // Only down-right
    {x: 670, y: 710}, // Only up-left
    {x: 630, y: 710}, // Only down-right
    {x: 630, y: 760}, // Only up-right
    {x: 710, y: 760}, // Only up-left
    {x: 710, y: 670}, // Only down-right
    {x: 750, y: 670}, // Only down-left
    {x: 750, y: 800},
    {x: 600, y: 800},
    {x: 600, y: 660},
    {x: 630, y: 660},
    {x: 630, y: 570},
    {x: 970, y: 570},
]

function checkPos() {
    let px = player.x;
    let py = player.y;
    if (px === 480 && py === 520) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 480 && py === 570) {blockUp = false; blockLt = true; blockDn = false; blockRt = true};
    if (px === 480 && py === 620) {blockUp = false; blockLt = false; blockDn = true; blockRt = false};
    if (px === 530 && py === 520) {blockUp = true; blockLt = false; blockDn = true; blockRt = false};
    if (px === 580 && py === 520) {blockUp = true; blockLt = false; blockDn = false; blockRt = false};
    if (px === 580 && py === 570) {blockUp = false; blockLt = true; blockDn = false; blockRt = true};
    if (px === 580 && py === 620) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 530 && py === 620) {blockUp = true; blockLt = false; blockDn = true; blockRt = false};
    if (px === 550 && py === 620) {blockUp = true; blockLt = false; blockDn = false; blockRt = false};
    if (px === 550 && py === 1030) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 966 && py === 1030) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 966 && py === 620) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 840 && py === 620) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 840 && py === 890) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 640 && py === 890) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 640 && py === 940) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
}