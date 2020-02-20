const nodes = [
    // {x: 530, y: 570}, // starting position
    {x: 480, y: 520}, // [0]
    {x: 480, y: 570},
    {x: 480, y: 620},
    {x: 530, y: 520},
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
    {x: 970, y: 100},
    {x: 580, y: 100},
    {x: 580, y: 230},
    {x: 850, y: 230},
    {x: 850, y: 480},
    {x: 890, y: 480},
    {x: 890, y: 190},
    {x: 630, y: 190},
    {x: 630, y: 140},
    {x: 930, y: 140},
    {x: 930, y: 520},
    {x: 800, y: 520},
    {x: 800, y: 280},
    {x: 580, y: 280},
    {x: 580, y: 420},
    {x: 670, y: 420},
    {x: 670, y: 480},
    {x: 720, y: 480},
    {x: 720, y: 370},
    {x: 630, y: 370},
    {x: 630, y: 330},
    {x: 760, y: 330},
    {x: 760, y: 520},
    {x: 620, y: 520},
    {x: 620, y: 480},
    {x: 540, y: 480},
    {x: 540, y: 90},
    {x: 80, y: 90},
    {x: 80, y: 520},
    {x: 220, y: 520},
    {x: 220, y: 220},
    {x: 440, y: 220},
    {x: 440, y: 180},
    {x: 170, y: 180},
    {x: 170, y: 460},
    {x: 130, y: 460},
    {x: 130, y: 130},
    {x: 490, y: 130},
    {x: 490, y: 270},
    {x: 260, y: 270},
    {x: 260, y: 520},
    {x: 390, y: 520},
    {x: 390, y: 420},
    {x: 440, y: 420},
    {x: 440, y: 380},
    {x: 350, y: 380},
    {x: 350, y: 470},
    {x: 310, y: 470},
    {x: 310, y: 320},
    {x: 490, y: 320},
    {x: 490, y: 480},
    {x: 440, y: 480},
    {x: 440, y: 570},
    {x: 70, y: 570},
    {x: 70, y: 1040},
    {x: 450, y: 1040},
    {x: 450, y: 890},
    {x: 200, y: 890},
    {x: 200, y: 670},
    {x: 170, y: 670},
    {x: 170, y: 950},
    {x: 410, y: 950},
    {x: 410, y: 990},
    {x: 120, y: 990},
    {x: 120, y: 620},
    {x: 250, y: 620},
    {x: 250, y: 850},
    {x: 460, y: 850},
    {x: 460, y: 720},
    {x: 380, y: 720},
    {x: 380, y: 670},
    {x: 340, y: 670},
    {x: 340, y: 760},
    {x: 410, y: 760},
    {x: 410, y: 800},
    {x: 300, y: 800},
    {x: 300, y: 620},
    {x: 430, y: 620},
    {x: 430, y: 670},
    {x: 500, y: 670},
    {x: 500, y: 1040},
    {x: 500, y: 1080},
]

// Conditions:
function allowAll() {
    blockUp = false;
    blockDn = false;
    blockLt = false;
    blockRt = false;
}
function allowUpDn() {
    allowAll();
    blockLt = true;
    blockRt = true;
}
function allowLtRt() {
    allowAll();
    blockUp = true;
    blockDn = true;
}
function allowUpRt() {
    allowAll();
    blockDn = true;
    blockLt = true;
}
function allowUpLt() {
    allowAll();
    blockDn = true;
    blockRt = true;
}
function allowDnRt() {
    allowAll();
    blockUp = true;
    blockLt = true;
}
function allowDnLt() {
    allowAll();
    blockUp = true;
    blockRt = true;
}
function allowUpLtRt() {
    allowAll();
    blockDn = true;
}
function allowDnLtRt() {
    allowAll();
    blockUp = true;
}

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
    if (px === 880 && py === 940) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 880 && py === 670) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 920 && py === 670) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 920 && py === 980) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 600 && py === 980) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 600 && py === 850) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 790 && py === 850) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 790 && py === 620) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 670 && py === 620) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 670 && py === 710) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 630 && py === 710) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 630 && py === 760) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 710 && py === 760) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 710 && py === 670) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 750 && py === 670) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 750 && py === 800) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 600 && py === 800) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 600 && py === 660) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 630 && py === 660) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 630 && py === 570) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 970 && py === 570) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 970 && py === 100) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 580 && py === 100) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 580 && py === 230) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 850 && py === 230) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 850 && py === 480) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 890 && py === 480) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 890 && py === 190) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 630 && py === 190) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 630 && py === 140) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 930 && py === 140) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 930 && py === 520) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 800 && py === 520) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 800 && py === 280) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 580 && py === 280) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 580 && py === 420) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 670 && py === 420) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 670 && py === 480) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 720 && py === 480) {blockUp = false; blockLt = false; blockDn = true; blockRt = true};
    if (px === 720 && py === 370) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 630 && py === 370) {blockUp = false; blockLt = true; blockDn = true; blockRt = false};
    if (px === 630 && py === 330) {blockUp = true; blockLt = true; blockDn = false; blockRt = false};
    if (px === 760 && py === 330) {blockUp = true; blockLt = false; blockDn = false; blockRt = true};
    if (px === 760 && py === 520) {allowUpLt()};
    if (px === 620 && py === 520) {allowUpLtRt()};
    if (px === 620 && py === 480) {allowDnLt()};
    if (px === 540 && py === 480) {allowUpLtRt()};
    if (px === 540 && py === 90) {allowDnLt()};
    if (px === 80 && py === 90) {allowDnRt()};
    if (px === 80 && py === 520) {allowUpRt()};
    if (px === 220 && py === 520) {allowUpLt()};
    if (px === 220 && py === 220) {allowDnRt()};
    if (px === 440 && py === 220) {allowUpLt()};
    if (px === 440 && py === 180) {allowDnLt()};
    if (px === 170 && py === 180) {allowDnRt()};
    if (px === 170 && py === 460) {allowUpLt()};
    if (px === 130 && py === 460) {allowUpRt()};
    if (px === 130 && py === 130) {allowDnRt()};
    if (px === 490 && py === 130) {allowDnLt()};
    if (px === 490 && py === 270) {allowUpLt()};
    if (px === 260 && py === 270) {allowDnRt()};
    if (px === 260 && py === 520) {allowUpRt()};
    if (px === nodes[78].x && py === nodes[78].y) {allowUpLt()};
    if (px === nodes[79].x && py === nodes[79].y) {allowDnRt()};
    if (px === nodes[80].x && py === nodes[80].y) {allowUpLt()};
    if (px === nodes[81].x && py === nodes[81].y) {allowDnLt()};
    if (px === nodes[82].x && py === nodes[82].y) {allowDnRt()};
    if (px === nodes[83].x && py === nodes[83].y) {allowUpLt()};
    if (px === nodes[84].x && py === nodes[84].y) {allowUpRt()};
    if (px === nodes[85].x && py === nodes[85].y) {allowDnRt()};
    if (px === nodes[86].x && py === nodes[86].y) {allowDnLt()};
    if (px === nodes[87].x && py === nodes[87].y) {allowUpLtRt()};
    if (px === nodes[88].x && py === nodes[88].y) {allowDnRt()};
    if (px === nodes[89].x && py === nodes[89].y) {allowUpLt()};
    if (px === nodes[90].x && py === nodes[90].y) {allowDnRt()};
    if (px === nodes[91].x && py === nodes[91].y) {allowUpRt()};
    if (px === nodes[92].x && py === nodes[92].y) {allowUpLt()};
    if (px === nodes[93].x && py === nodes[93].y) {allowDnLt()};
    if (px === nodes[94].x && py === nodes[94].y) {allowUpRt()};
    if (px === nodes[95].x && py === nodes[95].y) {allowDnLt()};
    if (px === nodes[96].x && py === nodes[96].y) {allowDnRt()};
    if (px === nodes[97].x && py === nodes[97].y) {allowUpRt()};
    if (px === nodes[98].x && py === nodes[98].y) {allowDnLt()};
    if (px === nodes[99].x && py === nodes[99].y) {allowUpLt()};
    if (px === nodes[100].x && py === nodes[100].y) {allowUpRt()};
    if (px === nodes[101].x && py === nodes[101].y) {allowDnRt()};
    if (px === nodes[102].x && py === nodes[102].y) {allowDnLt()};
    if (px === nodes[103].x && py === nodes[103].y) {allowUpRt()};
    if (px === nodes[104].x && py === nodes[104].y) {allowUpLt()};
    if (px === nodes[105].x && py === nodes[105].y) {allowDnLt()};
    if (px === nodes[106].x && py === nodes[106].y) {allowUpRt()};
    if (px === nodes[107].x && py === nodes[107].y) {allowDnLt()};
    if (px === nodes[108].x && py === nodes[108].y) {allowDnRt()};
    if (px === nodes[109].x && py === nodes[109].y) {allowUpRt()};
    if (px === nodes[110].x && py === nodes[110].y) {allowDnLt()};
    if (px === nodes[111].x && py === nodes[111].y) {allowUpLt()};
    if (px === nodes[112].x && py === nodes[112].y) {allowUpRt()};
    if (px === nodes[113].x && py === nodes[113].y) {allowDnRt()};
    if (px === nodes[114].x && py === nodes[114].y) {allowDnLtRt()};
    if (px === nodes[115].x && py === nodes[115].y) {allowUpRt()};
    if (px === nodes[116].x && py === nodes[116].y) {allowDnLt()};
    if (px === nodes[117].x && py === nodes[117].y) {allowUpDn()};
    if (px === nodes[118].x && py === nodes[118].y) {allowUpLtRt()};
}