oci compute instance launch --availability-domain XXXXXX --compartment-id XXXXXX --shape VM.Standard.A1.Flex --subnet-id XXXXXX --assign-public-ip true --boot-volume-size-in-gbs 100 --image-id XXXXXX --metadata '{ "ssh_authorized_keys": XXXXXX }' --shape-config '{"ocpus" : 4, "memoryInGBs": 24 }'