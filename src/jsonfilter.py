import json
import os

file_path= os.path.join(os.path.dirname(__file__), "city1.json")
data=json.load(open(file_path,'r',encoding='latin1')) #working
#print(data[1]['id'])
output=[]
ind=[]
v=[]
for i in range(len(data)):
    if data[i]['name'] not in v:
        v.append(data[i]['name'])
        ind.append(i)

for k in ind:
    output.append(data[k])
print(len(output))

with open("cities.json", "w") as outfile:
    json.dump(output, outfile)

# print(len(data))-->209579
#209,579 --> 157606 (51973 records removed)
